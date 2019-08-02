# AuraComponentFromURLBUtton
I'm commonly asked how to deal with the empty screen users get if they exit out of a modal, so here is an example!

When users navigate to a lightning component from a URL button on a related list (or overwriting the stanard edit button like in this example)
there is the potentional for an end user to exit the modal and be left on an empty screen.

You can use force:lightningQuickActionWithoutHeader to recreate a hearder and footer and control the user flow strictly.
