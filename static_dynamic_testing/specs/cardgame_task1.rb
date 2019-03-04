### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # line 18: should be def and not dif
  # arguments card 1 and card 2 should be seperated by a comma
  if card1.value > card2.value
    return card.name
    # line 21 return card1.name but name is not defined in the class card so its only return card 1
  else
    card2
  end
  # no method for equal card values so the end in line 29 is not needed
end
end

def self.cards_total(cards)
  total
  # line 32, total is undefined
  for card in cards
    total += card.value
    return "You have a total of" + total
    # line 36, the total should be return as total.to_s
  end
end
#  end is missing for the class CardGame
