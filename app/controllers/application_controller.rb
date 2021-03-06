class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    include ActionController::Cookies

    def current_user
        User.find_by(id: session[:current_user])
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: "Invalid Password or Username"}, status: :unprocessable_entity
    end

    def render_not_found_response(invalid)
        render json: { errors: "Invalid Password or Username"}, status: :not_found
    end
    def is_authorized?
        return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
    end
end
