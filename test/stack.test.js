class Stack {
  constructor() {
    this.top = -1;
    this.items = {}
    
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }

  pop() { 
    const val = this.items[this.top]
    this.top -= 1;
    return val;
  }
  
}


describe("My Stack", () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  })

  it("is created empty", () => {
   
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({})
  });

  it("can push to the top", () => {
   
    stack.push(3)
    expect(stack.top).toBe(0)
    expect(stack.peek).toBe(3);
  });

 it ("can pop off", () => {
   
    stack.push(3);
    stack.push(2)
    let result = stack.pop();
    expect(stack.peek).toBe(3)
    expect(result).toBe(2)
  });


})