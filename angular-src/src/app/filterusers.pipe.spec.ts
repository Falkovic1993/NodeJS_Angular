import { TestBed, async } from '@angular/core/testing';
import { FilterusersPipe } from './filterusers.pipe';

describe('App: Users', () => {
  beforeEach(() => {
    this.Users = [
        {_id: '11', firstname: 'Per', lastname: 'Hansen'},
        {_id: '11', firstname: 'Jens', lastname: 'Hansen'},
        {_id: '12', firstname: 'Helle', lastname: 'Hansen'},
        {_id: '13', firstname: 'Jørgen', lastname: 'Hansen'},
        {_id: '14', firstname: 'Berit', lastname: 'Hansen'},
    ];
    TestBed.configureTestingModule({
      declarations: [
        FilterusersPipe
      ],
    });
  });

    describe('FilterInternships', () => {
      let pipe = new FilterusersPipe();
      
      it('No search string returns input', () => {
          let result = pipe.transform(this.Users, '');
          expect(result.length).toBe(5);
      });

      it('Empty array returns empty array', () => {
          let result = pipe.transform([], 'Hi');
          expect(result.length).toBe(0);
      });

      it('Array with some input', () => {
        let result = pipe.transform([this.Users], 'ri');
        expect(result.length).toBe(1);
    });

     

      //...Add more tests.
    });
});
