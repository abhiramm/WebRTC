json.array!(@meetings) do |meeting|
  json.extract! meeting, :id, :performer_name, :performer_country, :duration, :time, :customer_name, :description
  json.url meeting_url(meeting, format: :json)
end
