Rails.application.routes.draw do
  resources :order_items
  resources :carts
  resources :items
  resources :users
  
  get '/authorized_user', to: 'users#show'

  # Login / Logout Routes
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
end
