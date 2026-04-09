import { Model } from '@vuex-orm/core'

export default class DemoUser extends Model {
  static entity = 'demo_users'

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(''),
      email: this.attr(''),
      role: this.attr(''),
      status: this.attr('active'),
      created_at: this.attr(''),
      updated_at: this.attr('')
    }
  }
}