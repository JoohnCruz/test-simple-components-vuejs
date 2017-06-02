import Vue from 'vue'
import Second from '@/components/second/second'

describe('Second.vue', () => {
    context('Render', () => {
        it('Title page', () => {
            const Constructor = Vue.extend(Second)
            const vm = new Constructor().$mount()

            expect(vm.$el.querySelector('.second h1').textContent).to.equal('This is the second component')
        })
    })

    context('Method sum()', () => {

        it('Is it a function?', () => {
            expect(Second.methods.sum).to.be.a('function')
        })

        it('What is the return?', () => {
            expect(Second.methods.sum(1, 3)).to.equal(4)
        })

    })

})