class Song < ActiveRecord::Base
	searchkick text_start: ['artist'], text_start: ['name']
end
