/**
        var len = this.target.getText().length - this.maxLength;
            this.setHtml(String.format(CharCounter.errorMessage, len));
        } else {
            this.setHtml(String.format(CharCounter.successMessage, -len));
        }
    },