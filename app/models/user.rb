class User < ApplicationRecord

    has_many :massages
    has_many :car_shops

    has_secure_password

    validates :password_digest, presence: true, uniqueness: true
end
