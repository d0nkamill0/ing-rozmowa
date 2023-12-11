import { dedupeMixin } from "@lion/core"

export const FormViewMixin = dedupeMixin(superclass => 
    class FormViewMixinClass extends ScopedElementsMixin(superclass) {
        
    })