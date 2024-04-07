
	document.addEventListener("DOMContentLoaded", function() {
		var selectBox = document.querySelector('.select-box select');
		var additionalInfo = document.querySelector('.additional-info');
	
		selectBox.addEventListener('change', function() {
			if (selectBox.value !== 'Uber Eats') {
				additionalInfo.innerHTML = `
					<div class="flex-container">
						<div>
							<label for="birthdate">Date<span> *</span></label>
							<br><br>
							<input type="date" id="birthdate" name="birthdate" >
						</div>
						<div>
							<label for="ORDER REFERENCE">ORDER REFERENCE</label>
							<br><br>
							<input type="text" placeholder="(if available)" size="10" id="order" name="order">
						</div>
					</div>
					<br>
					<label for="help">HOW CAN WE HELP YOU?<span> *</span></label>
							<br><br>
							<textarea name="help" id="help" cols="33" rows="9" ></textarea>
              <br>
              <span class = "help-error">This is a required field.</span> 
              <button class="next-btn">Next</button>
				`;
        var helpTextarea = document.getElementById('help');
            helpTextarea.addEventListener('input', function() {
                if (helpTextarea.value.trim() === '') {
                    document.querySelector('.help-error').style.display = 'block';
                } else {
                    document.querySelector('.help-error').style.display = 'none';
                }
            });
			} else {
				additionalInfo.innerHTML = `
					<p><strong>FOR ANY PROBLEM WITH AN ORDER THROUGH UBER EATS</strong></p>
					<p>You should report your issue directly in the Uber Eats app Help section</p>
				`;
			}
		});
		
    
	});

	window.addEventListener("scroll", function() {
		var header = document.getElementById("header");
		if (window.pageYOffset > 0) {
			header.classList.add("hidden-header");
		} else {
			header.classList.remove("hidden-header");
		}
	});