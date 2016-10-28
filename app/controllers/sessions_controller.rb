class SessionsController < ApplicationController

  def new
    render :layout => "empty"
  end


  def create
    @user = User.find_by_email(params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to '/'
    else
      redirect_to new_session_path
    end
  end

  # def destroy
  #   session.clear
  #   redirect_to '/'
  # end

  def destroy
  session[:user_id] = nil
  redirect_to '/'
end

end
