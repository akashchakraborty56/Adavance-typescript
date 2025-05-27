type Eventtype = 'click' | 'mouseover' | 'mouseout' | 'keydown' | 'keyup';

type newEvents = Exclude<Eventtype, 'mouseover'>

const handleEvent=(event: newEvents) => {
    console.log(event)
}

handleEvent('click'); // Valid
// handleEvent('mouseover'); // Error: Argument of type '"mouseover"' is not assignable to parameter of type 'newEvents'.
// handleEvent('mouseout'); // Valid

