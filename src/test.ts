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

function Prop(target: Object, propertyKey: string) {
   let value: number
   const getter = () => {
      console.log('Get the @Prop')
      return value
   }
   const setter = (newValue: number) => {
   value = newValue
   console.log('Set the @Prop')
   }
// Переопроеделение геттера и сеттера встроенными средствами JavaScript
   Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
   })
}

function Param(target: Object, propertyKey: string, index: number) {
   console.log('propertyKey of @Param:', propertyKey,'\nindex of @Param', index)
}

@Logger()
@Component(69)
export class User {
   @Prop id: number

   @Method
   updateId(@Param newId: number) {
      this.id = newId
      return this.id
   }
}

console.log(new User().id)
console.log('The updatedId(2) =', new User().updateId(2))