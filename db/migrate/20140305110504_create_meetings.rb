class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.string :performer_name
      t.string :performer_country
      t.datetime :duration
      t.datetime :time
      t.string :customer_name
      t.text :description

      t.timestamps
    end
  end
end
