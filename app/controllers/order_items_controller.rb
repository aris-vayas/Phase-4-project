class OrderItemsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    




    def create
        order_item = OrderItem.create!(orderitem_params)
        render json: order_item, status: :created
    end

    def update
        order_item = OrderItem.find(params[:id])
        order_item.update(order_item)
        render json: order_item, status: :ok
    end
   
private
    def orderitem_params
        params.permit(:item_id, :cart:id, :quantity)
    end 

    def render_invalid(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end

end
