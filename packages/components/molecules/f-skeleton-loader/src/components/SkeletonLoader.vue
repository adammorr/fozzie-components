

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
                    staticClass: `${this.$style[`c-skeleton-loader-${text}`]} ${this.$style['c-skeleton-loader-bone']}`
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

$skeleton-loader-heading-height: spacing(x4);
$skeleton-loader-text-height: spacing(x2);

.c-skeleton-loader {
  position: relative;
  vertical-align: top;
}

.c-skeleton-loader-bone {
    border-radius: inherit;
    overflow: hidden;
    position: relative;
    background-color: $grey--mid;
}
.c-skeleton-loader-bone::after {
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

.c-skeleton-loader-heading {
    height: $skeleton-loader-heading-height;
    width: 45%;
}

.c-skeleton-loader-text {
    flex: 1 0 auto;
    height: $skeleton-loader-text-height;
    margin-bottom: spacing();
}

@keyframes loading {
  100% {  transform: translateX(100%) }
}
</style>
