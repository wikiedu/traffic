# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161028114523) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clients", force: :cascade do |t|
    t.string   "name"
    t.string   "contact"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "company_id"
    t.index ["company_id"], name: "index_clients_on_company_id", using: :btree
  end

  create_table "companies", force: :cascade do |t|
    t.string "name"
  end

  create_table "expeditions", force: :cascade do |t|
    t.integer  "origin_location_id"
    t.integer  "destination_location_id"
    t.string   "sending_type"
    t.integer  "weight"
    t.string   "state"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.date     "date"
    t.integer  "client_id"
    t.string   "geolocation"
    t.index ["client_id"], name: "index_expeditions_on_client_id", using: :btree
    t.index ["destination_location_id"], name: "index_expeditions_on_destination_location_id", using: :btree
    t.index ["origin_location_id"], name: "index_expeditions_on_origin_location_id", using: :btree
  end

  create_table "locations", force: :cascade do |t|
    t.integer  "client_id"
    t.string   "internal_code"
    t.string   "name"
    t.string   "direction"
    t.string   "postal_code"
    t.time     "hour_in"
    t.time     "hour_out"
    t.string   "contact"
    t.integer  "route"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["client_id"], name: "index_locations_on_client_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "role"
    t.integer  "company_id"
    t.index ["company_id"], name: "index_users_on_company_id", using: :btree
  end

end
