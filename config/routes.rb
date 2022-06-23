Rails.application.routes.draw do
  resources :order_items
  resources :carts
  resources :items
  resources :users
  
  post '/login' , to: 'sessions#login'
  # get "/me", to: "users#show"
end
