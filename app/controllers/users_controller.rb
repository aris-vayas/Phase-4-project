class UsersController < ApplicationController
  # skip_before_action :is_authorized?, except: [:create]
  # before_action :is_admin?, only: [:update, :destroy]
  # GET "/users"
  def index 
      render json: User.all
  end 

  # GET "/users/:id"
  def show
      user = User.find(id: session[:current_user])
      render json: user
  end
  
  # POST "/users"
  def create
      user = User.create!(user_params)
      
      render json: user, status: :created
  end

  # PUT "/users/:id"
  def update
      user = User.find(params[:id])
      user.update!(user_params)
      render json: user, status: :created
  end

  # DELETE "/users/:id"
  def destroy
      user = User.find(params[:id])
      user.destroy
      head :no_content
  end

  private

  def user_params
      params.permit(:username, :password)
  end
  def cart_params
    params.permit(:user_id,:cart_number)
end
end