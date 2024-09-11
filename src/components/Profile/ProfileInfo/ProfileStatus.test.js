import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus"; // ES6

describe('Test profile status', () => {
  it('Status should be span field after init', () => {
    // test data
    const component = create(<ProfileStatus status={"my status"} updateStatus={()=>{}} />)
    const instance = component.root;
    const span = instance.findByType("span");

    // expectation
    expect(span).not.toBeNull()
  });
  it('Status should be span field after init', () => {
    // test data
    const component = create(<ProfileStatus status={"my status"} updateStatus={()=>{}} />)
    const instance = component.root;

    // expectation
    expect(() => {
      const input = instance.findByType("input");
    }).toThrow()
  });
  it('Status should have correct satus text', () => {
    // test data
    const component = create(<ProfileStatus status={"my status"} updateStatus={()=>{}} />)
    const instance = component.getInstance();

    // expectation
    expect(instance.state.status).toBe("my status")
  });
  it('Show input on click on span', () => {
    // test data
    const component = create(<ProfileStatus status={"my status"} updateStatus={()=>{}} />)
    const instance = component.root;
    const span = instance.findByType("span");
    span.props.onDoubleClick();
    const input = instance.findByType("input");

    // expectation
    expect(input.props.value).toBe("my status")
  });
  it('Check than callback was called', () => {
    // test data
    const mockCallbackFunc = jest.fn();
    const component = create(<ProfileStatus status={"my status"} updateStatus={mockCallbackFunc} />)
    const instance = component.getInstance();
    instance.deactivateEditeMode();

    // expectation
    expect(mockCallbackFunc.mock.calls.length).toBe(1)
  });
});
