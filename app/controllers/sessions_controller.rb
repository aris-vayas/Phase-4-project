class SessionsController < ApplicationController
    before_action :authorize_user, except: [:login, :signup]
    def login
       
        

        user = User.find_by!(username: params[:username])
        
      
        if user&.authenticate(params[:password])
            session[:current_user] = user.id 
            render json: user, status: :ok
        else
        
            render json: { errors: "Invalid Password or Username" }, status: :unauthorized
        end
    end
    def logout

    def logout
        session.delete :current_user
    end 
    end
    def cart_params
        params.permit(:user_id, :cart_number)
    end

end