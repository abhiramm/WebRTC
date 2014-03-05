class MeetingSerializer < ActiveModel::Serializer
  attributes :id, :performer_name, :performer_country, :duration, :time, :customer_name, :description
end
