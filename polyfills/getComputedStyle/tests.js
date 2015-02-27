describe('getComputedStyle()', function () {
    it('adds each style as an indexed property', function () {
        var style = getComputedStyle(document.body);

        expect(style).to.have.property('length');

        for (var i = 0; i < style.length; i++) {
            expect(style[i]).to.be.a('string');
            expect(style[i]).to.equal(style[i].toLowerCase());
        }
    });
});
