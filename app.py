def calculate_discount(user_input):
	# DANGER: Using eval() on user input is a massive security flaw!
	# It allows attackers to run arbitrary system commands.
	discount = int(user_input)
	return discount
print(calculate_discount("10 + 5"))
