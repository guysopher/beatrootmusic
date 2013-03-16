class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.String :id
      t.String :name
      t.String :content

      t.timestamps
    end
  end
end
