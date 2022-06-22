class ItemsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
            def index
                item = Item.all
                render json: item, status: :ok
            end

            
         
        

          
          
            private
    
            def render_not_found
                render json: { error: "Restaurant not found"}, status: :not_found
            end
           


end
