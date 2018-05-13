import React from 'react';
import semiRandomColor from './whoToAsk'


describe('semiRandomColor()', () => {
  it('should return true if semiRandomColor = red, green or yellow', function () {
      equal(semiRandomColor(), true)
  })
})