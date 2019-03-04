require("minitest/autorun")
require('minitest/rg')
require_relative('../card.rb')
require_relative('../card_game.rb')

class CardGameTest < MiniTest::Test

  def setup
   @acediamond = Card.new("diamond", 1)
   @twodiamonds = Card.new("diamond", 2)
   @threediamonds = Card.new("diamond", 3)
   @fourdiamonds = Card.new("diamond", 4)
   @cards = [@acediamond, @twodiamonds, @threediamonds, @fourdiamonds]
   @newgame = CardGame.new
 end

  def test_checkforAce__true
    expected = true
    actual = @newgame.checkforAce(@acediamond)
    assert_equal(expected, actual)
  end

  def test_highest_card__card1
    expected = @twodiamonds
    actual = @newgame.highest_card(@twodiamonds, @acediamond)
    assert_equal(expected, actual)
  end

  def test_highest_card__card2
    expected = @threediamonds
    actual = @newgame.highest_card(@twodiamonds, @threediamonds)
    assert_equal(expected, actual)
  end

  def test_highest_card__equal
    expected = "Cards have equal value"
    actual = @newgame.highest_card(@twodiamonds, @twodiamonds)
    assert_equal(expected, actual)
  end

  def test_cards_total
    expected = "You have a total of 10"
    actual = CardGame.cards_total(@cards)
    assert_equal(expected, actual)
  end

end
