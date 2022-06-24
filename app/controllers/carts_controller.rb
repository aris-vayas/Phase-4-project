class CartsController < ApplicationController
   
def show
    cart= Cart.find(params[:id])
    render json: cart , include: ["order_items"]
end


end
