using UnityEngine;
using UnityEngine.Events;

public class HingeJointListener : MonoBehaviour
{
    //angle threshold to trigger if we reached limit
    public float angleBetweenThreshold = 1f;
    //State of the hinge joint : either reached min or max or none if in between
    public HingeJointState hingeJointState = HingeJointState.None;

    //Event called on min reached
    public UnityEvent OnMinLimitReached;
    //Event called on max reached
    public UnityEvent OnMaxLimitReached;

    public enum HingeJointState { Min,Max,None}
    private HingeJoint hinge;
    private Quaternion lastPosition;
    private GameObject lever;

    // Start is called before the first frame update
    void Start()
    {
        lever = this.gameObject;
        hinge = GetComponent<HingeJoint>();
        lastPosition = lever.transform.rotation;
    }

    private void FixedUpdate()
    {
        float angleWithMinLimit = Mathf.Abs(hinge.angle - hinge.limits.min);
        float angleWithMaxLimit = Mathf.Abs(hinge.angle - hinge.limits.max);

        //Reached Min
        if(angleWithMinLimit < angleBetweenThreshold)
        {
            if (hingeJointState != HingeJointState.Min)
                Debug.Log("Min");
                OnMinLimitReached.Invoke();

            hingeJointState = HingeJointState.Min;
            lever.transform.rotation = lastPosition;
            Debug.Log(lastPosition);
        }
        //Reached Max
        else if (angleWithMaxLimit < angleBetweenThreshold)
        {
            if (hingeJointState != HingeJointState.Max)
                Debug.Log("Max");
                OnMaxLimitReached.Invoke();

            hingeJointState = HingeJointState.Max;
        }
        //No Limit reached
        else
        {
            hingeJointState = HingeJointState.None;
        }
    }
}
