export class TableSelection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.clear()
        $el.focus().add(TableSelection.className)
        this.group.push($el)
        this.current = $el
    }

    clear() {
        this.group.forEach($el => $el.remove(TableSelection.className))
        this.group = []
    }

    selectGroup($group = []) {
        this.clear()

        this.group = $group
        this.group.forEach($el => $el.add(TableSelection.className))
    }
}
