function Component(id: number) {
   console.log('init @Component')
   return (target: Function) => {
      console.log('run @Component')
      target.prototype.id = id
   }
}

function Logger() {
   console.log('init @Logger')
   return (target: Function) => {
      console.log('run @Logger')
   }
}

@Logger()
@Component(69)
export class User {
   id: number

   updateId(newId: number) {
      this.id = newId
      return this.id

   }
}

console.log(new User().id)