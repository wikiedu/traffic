class UsersController < ApplicationController

before_action :authorize_user, only: [:show]

  # renders the home page
def home
  if current_user.nil?
    @name = 'Ironhacker'
  else
    @name = current_user.username
  end
end

  def index
    @users = User.all
  end

  # renders the signup form
  def new
    @user = User.new
      render :layout => "empty"
  end

  def show
  end

  # receives form and creates a user from that data
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/'
    else
      redirect_to new_user_path
    end
  end

private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end
