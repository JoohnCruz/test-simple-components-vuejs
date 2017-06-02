import Vue from 'vue'
import First from '@/components/first/first'

describe('First.vue', () => {
    context('Render', () => {
        it('Title page', () => {
            const Constructor = Vue.extend(First)
            const vm = new Constructor().$mount()

            expect(vm.$el.querySelector('.first h1').textContent).to.equal('This is the first component')
        })
    })

    context('Method message()', () => {
        it('Is it a function?', () => {
            expect(First.methods.message).to.be.a('function')
        })

        it('What is the return type?', () => {
            expect(First.methods.message()).to.be.a('string')
        })

        it('What is the return?', () => {
            expect(First.methods.message()).to.equal('This is the message')
        })

    })

})