import { User, UserProps } from './../models/User';
import { Callback } from './../models/Eventing';
import { View } from './View';
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: Callback } {
    return {
      'click:button.set-age': this.onSetAgeClick,
      'click:button.change-name': this.onSetNameClick,
      'click:button.save-model': this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    console.log('set-age');
    this.model.setRandomAge();
  };

  onHeaderHover(): void {
    console.log(123);
  }

  onButtonClick(): void {
    console.log('button click');
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="change-name">Change name</button>
        <button class="set-age">Set random age</button>
        <button class="save-model">Save</button>
      </div>
    `;
  }
}
