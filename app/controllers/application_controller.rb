class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  


  helper_method :current_user

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def require_user
    redirect_to '/login' unless current_user
  end

  def after_sign_in_path_for(user)
    clients_path
  end
  def authorize_user
    unless current_user
      flash[:message] = 'Please LogIn or register to access this page'
      redirect_to root_path
    end
  end

end
