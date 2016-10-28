class ClientsController < ApplicationController

    before_action :transporter_redirect, except: :index

    def index
      if current_user.clients
        @clients = current_user.clients
      end
    end

    def new
      @client = Client.new
    end

    def create
      @client = current_user.clients.new(clients_params)
      if @client.save
        redirect_to clients_path
      else
        render 'new'
      end

    end

    def edit
      @current_client = current_user.clients.find_by(id: params[:id])
    end

    def update
      @current_client = current_user.clients.find_by(id: params[:id])

      if @current_client.update_attributes(clients_params)
        redirect_to clients_path
      else
        render 'edit'
      end
    end

    def destroy
      @current_client = current_user.clients.find_by(id: params[:id])
      @current_client.destroy
      redirect_to clients_path
    end

    private

    def clients_params
      params.require(:client).permit(:name, :contact).merge(company_id: current_user.company.id)
    end

    def transporter_redirect
      if current_user.transporter?
        redirect_to clients_path
      end
    end

end
