PinClone::Application.routes.draw do
  devise_for :users
  
  resources :users, only: [:edit, :update, :show] do
    member do
      get :subscriptions, :subscribers
    end
  end
  resources :pins, only: [:index, :new, :create] do
    resources :comments, only: [:create]
  end
  resources :comments, only: [:destroy]
  resources :friendships, only: [:destroy, :create]

   root to: 'home#index'
   match '/search',  to: 'search#search'
   match '/allpins',  to: 'home#paginate_pins'

end