import {PlateSelectors} from "./plate-numbers.selector";

describe('Plate Numbers Selectors', () => {

  let initialState = 

     [
            {
              "id": "1",
              "plateNumber": "KAR123",
              "ownerName": "Sam"
            },
            {
              "id": "2",
              "plateNumber": "MAN234",
              "ownerName": "Alice"
            },
            {
              "id": "3",
              "plateNumber": "HYD789",
              "ownerName": "Bob"
            },
            {
              "id": "4",
              "plateNumber": "CHN456",
              "ownerName": "David"
            },
            {
              "id": "5",
              "plateNumber": "TRI567",
              "ownerName": "John"
            }
          ]

          
  it('should get the plates', () => {
    const result = PlateSelectors.selectPlateNumbers.projector(initialState);
    expect(result.length).toBe(5);
  });
 
})

