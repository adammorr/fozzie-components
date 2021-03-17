

<script>
export default {
    name: 'SkeletonLoader',
    components: {},
    props: {
        skeletonType: {
            type: String,
            default: 'heading'
        }
    },
    data () {
        return {
            rootTypes: {
                text: 'text',
                heading: 'heading'
            }
        };
    },
    computed: {
        attrs () {
            return {
                'data-test-id': 'skeletonLoader',
                'aria-busy': true,
                'aria-live': 'polite',
                role: 'alert',
                ...this.$attrs
            };
        }
    },
    methods: {
        genBone (text = this.skeletonType, children) {
            return this.$createElement(
                'div',
                {
                    staticClass: `${this.$style[`c-skeleton-loader__${text}`]} ${this.$style['c-skeleton-loader__bone']}`
                },
                children
            );
        }
    },
    render (createElement) {
        return createElement(
            'div', {
                staticClass: this.$style['c-skeleton-loader'],
                attrs: this.attrs
            },
            [this.genBone()]
        );
    }

};
</script>

<style lang="scss" module>

$skeleton-loader-heading-height: 32px;
$skeleton-loader-text-height: 16px;

.c-skeleton-loader {
  position: relative;
  vertical-align: top;

   &__bone {
       border-radius: inherit;
        overflow: hidden;
        position: relative;
        background-color: $grey--mid;

        &::after {
            background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0));

            animation: loading 1.5s infinite;
            content: '';
            height: 100%;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transform: translateX(-100%);
            z-index: 1
        }
   }

   &__heading {
    height: $skeleton-loader-heading-height;
    width: 45%;
  }

  &__text {
    flex: 1 0 auto;
    height: $skeleton-loader-text-height;
    margin-bottom: spacing();
  }
}

@keyframes loading {
  100% {  transform: translateX(100%) }
}
</style>
