window.addEventListener('load', () => {
    const for_list = document.querySelector('.for_list');
    const for_add = document.querySelector('.for_add');
    const learn_add = document.querySelector('.learn_add');
    const learn_list = document.querySelector('.learn_list');
    const program_list = document.querySelector('.program_list');
    const program_add = document.querySelector('.program_add');

    function setClicks() {
        // for
        const items = document.querySelectorAll('.for_item');
        items.forEach(item => {
            item.querySelector('.for_remove').addEventListener('click', () => {
                item.remove();
            })
        })

        // learns
        const items2 = document.querySelectorAll('.learn_item');
        items2.forEach(item => {
            item.querySelector('.learn_remove').addEventListener('click', () => {
                item.remove();
            })
        })

        // program
        const items3 = document.querySelectorAll('.program_item');
        items3.forEach((item, index) => {
            item.querySelector('.program_remove').addEventListener('click', () => {
                item.remove();
            })
        })
    }

    setClicks();

    for_add.addEventListener('click', () => {
        const forItem = document.createElement('div');

        forItem.innerHTML = `<li class="for_item">
        <label>Title</label>
        <input type="text" name="for_title" required>
        <br>
        <label>Description</label>
        <input type="text" name="for_description" required>
        <br>
        <button type="button" class="for_remove">Remove</button>
    </li>`

        for_list.append(forItem);

        setClicks();
    })

    program_add.addEventListener('click', () => {
        const programItem = document.createElement('div');

        programItem.innerHTML = `<li class="program_item">
        <label for="program">Program item</label>
        <input type="text" name="program" id="program" required>
        <br>
        <button type="button" class="program_remove">Remove</button>
    </li>`

        program_list.append(programItem);

        setClicks();
    })

    learn_add.addEventListener('click', () => {
        const learnItem = document.createElement('div');

        learnItem.innerHTML = `<li class="learn_item">
        <label>Image</label>
        <input type="file" name="learns_img" required>
        <br>

        <label>Title</label>
        <input type="text" name="learns_title" required>
        <br>

        <label>Description</label>
        <input type="text" name="learns_description" required>
        <br>

        <button type="button" class="learn_remove">Remove</button>
    </li>`

        learn_list.append(learnItem);

        setClicks();
    })
})