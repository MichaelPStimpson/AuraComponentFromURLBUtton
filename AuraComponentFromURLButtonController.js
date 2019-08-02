({
    handleLoad: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
    },

    handleSubmit: function(cmp, event, helper) {
        cmp.set('v.disabled', true);
        cmp.set('v.showSpinner', true);
    },

    handleError: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
        cmp.set('v.disabled', false);
    },

    handleSuccess: function(cmp, event, helper) {
        cmp.set('v.showSpinner', false);
        
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": cmp.get("v.recordId"),
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
    
    handleCancel: function(cmp, event, helper){
        cmp.set('v.disabled', true);
        cmp.set('v.showSpinner', true);
        
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": cmp.get("v.recordId"),
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
})