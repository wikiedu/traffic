Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout' => 'sessions#destroy'
    root 'welcome#index'

  post '/update_geolocation', to: 'geocoding#update'
  # get '/selection', to: 'welcome#select'
  # get '/print', to: 'welcome#print'
    resources :clients do
      resources :locations do
        collection { post :import }
      end
      resources :expeditions do
        member do
          get :print
        end
        collection do
          get :mapping
          post :import
          get :print
        end
      end
    end

end
