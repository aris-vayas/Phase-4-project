class User < ApplicationRecord
    # https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html
    has_secure_password
    
  
    
    validates :username, presence: true, uniqueness: true
    # validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    
     
end