class OrderItemSerializer < ActiveModel::Serializer
  attributes :id , :item_id, :cart_id, :

  has_one :item
  belongs_to :cart
end
