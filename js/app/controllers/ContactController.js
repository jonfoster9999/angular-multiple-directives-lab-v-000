function ContactController() {
    this.contacts = [{
        name: 'Bob',
        phoneNumber: '0123458690'
    },{
        name: 'Tim',
        phoneNumber: '3934203242'
    },{
        name: 'Ross',
        phoneNumber: '0684059433'
    }];

    var vm = this

    this.removeContact = function (index) {
        this.contacts.splice(index, 1);
    }

    this.submit = function() {
        vm.contacts.push({
            name: this.name,
            phoneNumber: this.phoneNumber
        })
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);