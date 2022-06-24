class OrderItemsController < ApplicationController


    def index
        render json: OrderItem.all,include: ['item']
    end 

    def create
        orderItem = OrderItem.create!(order_item_params)
        render json: orderItem, status: :created
    end
private
def order_item_params
    params.permit(:item_id,:cart_id)
end
end
