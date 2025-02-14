import cpp

from FunctionCall call
where call.getTarget().hasGlobalName("strcpy")
select call, "This call to strcpy() could be dangerous; consider using strncpy() instead."
import cpp

from FunctionCall call
where call.getTarget().hasGlobalName("strcpy")
select call, "This call to strcpy() could be dangerous; consider using strncpy() instead."
