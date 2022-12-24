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

function Method(
   target: Object,
   propertyKey: string,
   propertyDescriptor: PropertyDescriptor
) {
   console.log(propertyKey)
   const oldValue = propertyDescriptor.value
   propertyDescriptor.value = function (...args: any[]) {
      let q = args[0] * 10
   console.log(`The propertyDescriptor: ${q}\nThe old value of propertyDescriptor: \n ${oldValue}`)
      return q
   }

}

@Logger()
@Component(69)
export class User {
   id: number

   @Method
   updateId(newId: number) {
      this.id = newId
      return this.id

   }
}

console.log(new User().id)
console.log('The updatedId(2) =', new User().updateId(2))