"use client"
import { Button } from "reactstrap";
import { useFormStatus } from "react-dom";


const ButtonEdit = ({ action, color, className }) => {
  const { pending } = useFormStatus();





  return (
    <Button
      type="submit"
      color={color}
      className={className}
        disabled={pending}
    >
      {pending ? (
       "Vänta..."
      ) : (
        action
      )}
    </Button>
  );
}

export default ButtonEdit;
