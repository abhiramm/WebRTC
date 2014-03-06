class HomeController < ApplicationController
  def index
		default_client = "aravind"
		@client_name = params[:client]
		if @client_name.nil?
			@client_name = default_client
		end
		TWILIO_INIT.allow_client_outgoing DEMO_APP_SID_TWILIO
		TWILIO_INIT.allow_client_incoming @client_name
		@token = TWILIO_INIT.generate
	end
	
	def voice
		params[:PhoneNumber]
		response = Twilio::TwiML::Response.new do |r|
		# Should be your Twilio Number or a verified Caller ID
			r.Dial :callerId => caller_id do |d|
			# # Test to see if the PhoneNumber is a number, or a Client ID. In
			# # this case, we detect a Client ID by the presence of non-numbers
			# # in the PhoneNumber parameter.
				if /^[\d\+\-\(\) ]+$/.match(number)
					d.Number(CGI::escapeHTML number)
				else
					d.Client number
				end
			end
		end
	response.text 
	end
end
